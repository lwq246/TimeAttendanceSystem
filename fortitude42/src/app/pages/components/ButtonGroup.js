import { Link } from "react-router-dom";
const ButtonGroup = () => {
    return (
<div className="d-flex gap-5" style={{ marginLeft: "auto" }}>
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
                                    </div>
                                     );
                                    };

export default ButtonGroup;