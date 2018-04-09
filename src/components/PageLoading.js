import React from 'react';

function PageLoading() {
  return (
    <div className="box">
      <div className="box-header with-border margin">
        <h3 className="box-title">Loading Page... </h3>
        <div className="box-tools pull-right">
          <button type="button" className="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="" data-original-title="Collapse">
            <i className="fa fa-minus"></i>
          </button>
          <button type="button" className="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="" data-original-title="Remove">
            <i className="fa fa-times"></i>
          </button>
        </div>
      </div>
      <div className="box-body">
        <br /><br />
        <div className="row margin">
          <div className="col-xs-12 text-center">
            <div className="box box-widget">
            <div className="box-header">
              <h3 className="box-title">Loading state</h3>
            </div>
            <div className="box-body">
              Your Page Is Loading. Wait for few more seconds.
            </div>
            <div className="overlay">
              <i className="fa fa-refresh fa-spin"></i>
            </div>
          </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}

export default PageLoading;
