DELIMITER //
CREATE PROCEDURE asignar_estudiante_encuesta(
    IN p_estudiante_id INT,
    IN p_encuesta_id INT,
    IN p_ciclo_id INT,
    IN p_institucion_id INT
)
BEGIN
    DECLARE v_asignacion_id INT;
    
    SELECT id INTO v_asignacion_id
    FROM asignaciones
    WHERE encuesta_id = p_encuesta_id AND ciclo_id = p_ciclo_id AND institucion_id = p_institucion_id;
    
    IF v_asignacion_id IS NULL THEN
        INSERT INTO asignaciones (encuesta_id, ciclo_id, institucion_id)
        VALUES (p_encuesta_id, p_ciclo_id, p_institucion_id);
        SET v_asignacion_id = LAST_INSERT_ID();
    END IF;
    
    INSERT INTO asig_estudiantes (estudiante_id, asignacion_id)
    VALUES (p_estudiante_id, v_asignacion_id);
END //
DELIMITER ;