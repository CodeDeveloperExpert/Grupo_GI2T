DELIMITER //
CREATE TRIGGER validar_fechas_ciclo
BEFORE INSERT ON ciclos
FOR EACH ROW
BEGIN
    IF NEW.fecha_fin <= NEW.fecha_ini THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'La fecha de fin debe ser posterior a la fecha de inicio';
    END IF;
END //
DELIMITER ;