function ThreePage() {
  return <div>
    <div className="col-lg-3 col-md-4 col-sm-4">
                    <div className=" clearfix">
                        <h2>Thawanrat</h2>
                        
                        <img src="..." width="110%" className="profile-img img-responsive " />
                        <div className="profile-label">
                            <span className="label label-danger"><p/>Student</span>
                        </div>

                        

                        

                        <div className="profile-details">
                            <ul className="fa-ul">
                                <li><i className="fa-li fa fa-truck"></i>Orders: <span>456</span></li>
                                <li><i className="fa-li fa fa-comment"></i>Posts: <span>828</span></li>
                                <li><i className="fa-li fa fa-tasks"></i>Tasks done: <span>1024</span></li>
                            </ul>
                        </div>

                        <div className="profile-message-btn center-block text-center">
                            <a href="#" className="btn btn-success">
                                <i className="fa fa-envelope"></i> Send message
                            </a>
                        </div>
                    </div>
                </div>
  </div>;
}

export default ThreePage;
