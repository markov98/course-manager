const db = require('../config/db')

exports.getAll = async () => {
    const stmt = db.prepare(`
            SELECT id, name, description, image
            FROM courses
        `);

    return stmt.all();
};

exports.editCourse = async (courseId, name, description) => {
    const stmt = db.prepare('SELECT name FROM courses WHERE id = ?');
    const course = stmt.get(courseId);

    if (!course) {
        throw new Error('Course not found');
    }

    const updateStmt = db.prepare('UPDATE courses SET name = ?, description = ? WHERE id = ?');
    updateStmt.run(name, description, courseId);

    return { message: 'Course edited successfully' };
}