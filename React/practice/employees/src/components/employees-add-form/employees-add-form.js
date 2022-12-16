import './employees-add-form.css';


const EmployeesAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex">
                <input
                    type="text"
                    className="form-control new-post-label"
                    placeholder="Имя:" />
                <input
                    type="text"
                    className="form-control new-post-label"
                    placeholder="З/П в $:" />

                <button
                    type="submit"
                    className="btn btn-outline-light">Add</button>
            </form>
        </div>
    );
};

export default EmployeesAddForm;