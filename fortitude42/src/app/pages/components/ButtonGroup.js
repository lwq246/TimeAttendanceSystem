import { Link } from "react-router-dom";

const ButtonGroup = ({ anyChecked }) => {
    return (
        <div className="d-flex gap-5" style={{ marginLeft: "auto" }}>
            {anyChecked ? (
                <button className="btn btn-danger">
                    <i className="bi bi-trash"></i>
                    Delete
                </button>
            ) : (
                <>
                    <Link to="#" className="btn btn-light-primary ml-3">
                        <i className="bi bi-filter"></i>
                        Filter
                    </Link>
                    <Link to="#" className="btn btn-light-primary">
                        <i className="bi bi-box-arrow-in-up"></i>
                        Export
                    </Link>
                    <Link to="#" className="btn btn-primary">
                        <i className="bi bi-person-add"></i>
                        New
                    </Link>
                </>
            )}
        </div>
    );
};

export default ButtonGroup;
