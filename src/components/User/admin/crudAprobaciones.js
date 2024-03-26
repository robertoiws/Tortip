import React, { Component } from "react";
import { connect } from "react-redux";
import {
  approveRequest,
  denyRequest,
  fetchRequests,
} from "../actions/requestActions";

class ApprovalView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requests: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    try {
      const data = await this.props.fetchRequests();
      this.setState({ requests: data, loading: false });
    } catch (error) {
      console.error("Error al cargar las solicitudes:", error);
      this.setState({ loading: false });
    }
  }

  handleApprove = (id) => {
    this.props.approveRequest(id);
  };

  handleDeny = (id) => {
    this.props.denyRequest(id);
  };

  render() {
    const { requests, loading } = this.state;

    if (loading) {
      return <p>Cargando...</p>;
    }

    return (
      <div className="container mt-4">
        <h2 className="mb-4">Panel de Aprobación</h2>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request.id}>
                <td>{request.id}</td>
                <td>{request.nombre}</td>
                <td>{request.descripcion}</td>
                <td>
                  <button
                    className="btn btn-success mr-2"
                    onClick={() => this.handleApprove(request.id)}
                  >
                    Aprobar
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDeny(request.id)}
                  >
                    Denegar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchRequests,
  approveRequest,
  denyRequest,
};

export default connect(null, mapDispatchToProps)(ApprovalView);
