CREATE VIEW resumen_asignaciones AS
SELECT 
    a.id AS asignacion_id,
    e.nombre AS encuesta,
    c.fecha_ini,
    c.fecha_fin,
    i.nombre AS institucion,
    COUNT(ae.id) AS num_estudiantes_asignados
FROM 
    asignaciones a
    JOIN encuestas e ON a.encuesta_id = e.id
    JOIN ciclos c ON a.ciclo_id = c.id
    JOIN instituciones i ON a.institucion_id = i.id
    LEFT JOIN asig_estudiantes ae ON a.id = ae.asignacion_id
GROUP BY 
    a.id, e.nombre, c.fecha_ini, c.fecha_fin, i.nombre;