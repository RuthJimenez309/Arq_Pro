    import { z } from "zod";

    // =====================================================================
    // PISO 1: EL MOLDE DE SEGURIDAD
    // =====================================================================
    const AccessTokenSchema = z.object({
    userId: z
        .string()
        .uuid({ message: "El formato de ID no es un UUID válido." }),

    username: z
        .string()
        .regex(/^[a-zA-Z0-9]+$/, {
        message: "El nombre contiene caracteres prohibidos.",
        })
        .min(3),

    role: z.enum(["user", "guest"]),

    clientIp: z.string().regex(/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/, {
        message: "El formato de IP no es válido.",
    }),
    });

    // =====================================================================
    // PISO 2: EL GUARDIÁN DE SEGURIDAD
    // =====================================================================
    function inspeccionarYDefender(datosSospechosos: any): void {
    const resultado = AccessTokenSchema.safeParse(datosSospechosos);

    if (!resultado.success) {
        console.log(
        "\x1b[31m%s\x1b[0m",
        " [ALERTA DE SEGURIDAD] ¡Intento de alteración de datos detectado!",
        );

        console.log(
        " ¿POR QUÉ FALLÓ?:",
        JSON.stringify(resultado.error.format(), null, 2),
        );

        if (datosSospechosos.role === "admin") {
        console.log(
            "\x1b[33m%s\x1b[0m",
            " CLASIFICACIÓN DEL INCIDENTE: Escalada de Privilegios Vertical vía Burp Suite.",
        );
        console.log(
            ` DETALLE TÉCNICO: Cuenta del usuario intentó forzar privilegios de Administrador de forma ilícita.`,
        );
        }

        console.log("\n [RESPUESTA AUTOMATIZADA DE INCIDENTES ACTIVADA]");
        console.log(
        `ACCIÓN: Token de sesión invalidado y destruido en la memoria interna.`,
        );
        console.log(
        ` ACCIÓN: Dirección IP ${datosSospechosos.clientIp || "Desconocida"} enviada a la lista negra del Firewall.`,
        );
        console.log("ESTADO: Amenaza contenida con éxito en 0.4 milisegundos.\n");
    } else {
        console.log(
        "\x1b[32m%s\x1b[0m",
        "[ZodGuard] Datos limpios. Acceso seguro concedido al servidor.",
        );
    }
    }

    // =====================================================================
    // PISO 3: SIMULACIÓN EN VIVO
    // =====================================================================

    const datosDeUsuarioLimpio = {
    userId: "c9b1c7a2-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
    username: "reymon",
    role: "user",
    clientIp: "192.168.1.45",
    };

    const datosDeHackerConBurpSuite = {
    userId: "TEXTO_INYECTADO_ATACANTE", // <-- Rompe el formato UUID
    username: "rymon",
    role: "admin", // <-- Intenta escalar privilegios a la fuerza
    clientIp: "185.220.101.5",
    };

    console.log("=========================================");
    console.log("INICIANDO ENTORNO INTERACTIVO DE APPSEC ");
    console.log("=========================================");

    console.log(
    "\n[Simulación]: Un usuario normal inicia sesión en la plataforma...",
    );
    setTimeout(() => {
    inspeccionarYDefender(datosDeUsuarioLimpio);

    console.log("\n---------------------------------------------------------");
    console.log("[Simulación]: Un hacker intercepta el tráfico con Burp Suite,");
    console.log(
        "              modifica los datos e intenta enviarlos al servidor...",
    );

    setTimeout(() => {
        inspeccionarYDefender(datosDeHackerConBurpSuite);
    }, 2500); // Pausa de 2.5
    }, 1000);