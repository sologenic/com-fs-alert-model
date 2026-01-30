package client

import (
	"context"

	grpcdef "github.com/sologenic/com-fs-alert-model"
	grpcclient "github.com/sologenic/com-fs-utils-internal-lib/go/grpc-client"
)

const endpoint = "ALERT_STORE"

var (
	client     grpcdef.AlertServiceClient
	grpcClient *grpcclient.GRPCClient
)

func initClient() {
	grpcClient = grpcclient.InitClient(endpoint)
	client = grpcdef.NewAlertServiceClient(grpcClient.Conn)
}

func Client() grpcdef.AlertServiceClient {
	if client == nil {
		initClient()
	}
	return client
}

func AuthCtx(ctx context.Context) context.Context {
	if grpcClient == nil {
		initClient()
	}
	return grpcClient.AuthCtx(ctx)
}
