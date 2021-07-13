import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="m-0">Tagihan</h1>
                                </div>{/* /.col */}
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active">Tagihan</li>
                                    </ol>
                                </div>{/* /.col */}
                            </div>{/* /.row */}
                        </div>{/* /.container-fluid */}
                    </div>
                    
                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                            <div className="col-12">
                                <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Daftar Pendaftar</h3>
                                </div>
                                {/* ./card-header */}
                                <div className="card-body">
                                    <table id="example2" className="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                        <th>No</th>
                                        <th>No Registrasi</th>
                                        <th>Konsumen</th>
                                        <th>Waktu Kunjungan</th>
                                        <th>Wilayah</th>
                                        <th>Biaya</th>
                                        <th>action</th>
                                        </tr>
                                    </thead>
                                    <tbody><tr>
                                        <td>$item-&gt;id</td>
                                        <td>
                                            <h5 className="font-weight-bold">$item-&gt;no_registrasi</h5>
                                            <div className="text-sub">$item-&gt;created_at</div>
                                        </td>
                                        <td>
                                            <div>
                                            <div className="font-weight-bold text-capitalize">$item-&gt;name</div>
                                            <div className="text-sub">$item-&gt;email</div>
                                            <div className="text-sub">$item-&gt;phone</div>
                                            <div className="font-weight-bold npm">NPM: <span className="badge-border">$item-&gt;npm ? $item-&gt;npm : '-'</span></div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="date-coming font-weight-bold text-success">$item-&gt;date_start -  $item-&gt;date_end</div>
                                            <div className="text-sub font-weight-bold">$item-&gt;waktu</div>
                                            <div className="badge badge-info" role="alert">
                                            $item-&gt;service
                                            </div>
                                        </td>
                                        <td>
                                            <div className="font-weight-bold text-capitalize">$item-&gt;region</div>
                                            <div className="text-sub">$item-&gt;address</div>
                                        </td>
                                        <td>
                                            <div className="nominal font-weight-bold text-success">Rpnumber_format($item-&gt;amount,0, ',', '.'),-</div>
                                            {/* @if ($item-&gt;paid == 0) */}
                                            <div className="badge badge-warning">
                                            Belum Bayar
                                            </div>
                                            {/* @else
                                            <div className="badge badge-success">
                                            Lunas
                                            </div>
                                            @endif */}
                                        </td>
                                        <td className="project-actions text-right">
                                            <a className="btn btn-primary btn-xs" href="/transaksi-detail/$item->id">
                                            <i className="fas fa-folder">
                                            </i>
                                            View
                                            </a>
                                            <a className="btn btn-info btn-xs" href="#">
                                            <i className="fas fa-pencil-alt">
                                            </i>
                                            Edit
                                            </a>
                                            <a className="btn btn-danger btn-xs" href="#">
                                            <i className="fas fa-trash">
                                            </i>
                                            Delete
                                            </a>
                                        </td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                                {/* /.card-body */}
                                </div>
                                {/* /.card */}
                            </div>
                            </div>
                        </div>
                        </section>

                    
                </div>
        )
    }
}
