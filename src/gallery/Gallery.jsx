import { Link, Outlet } from "react-router-dom";

export default function Gallery(){
    return <>
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <ul className="list-unstyled">
                        <li><Link to="web">Web</Link></li>
                        <li><Link to="mobile">Mobile</Link></li>

                    </ul>
                </div>
                <div className="col-md-10">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    </>
}