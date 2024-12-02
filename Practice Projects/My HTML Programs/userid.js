#  -*-cperl-*-
#
#  Copyright (c) 2002-2019 Greg Sabino Mullane and others: see the Changes file
#  Portions Copyright (c) 2002 Jeffrey W. Baker
#  Portions Copyright (c) 1997-2001 Edmund Mergl
#  Portions Copyright (c) 1994-1997 Tim Bunce
#
#  You may distribute under the terms of either the GNU General Public
#  License or the Artistic License, as specified in the Perl README file.


use strict;
use warnings;
use 5.008001;

{
	package DBD::Pg;

	use version; our $VERSION = qv('3.8.0');

	use DBI ();
	use DynaLoader ();
	use Exporter ();
	use vars qw(@ISA %EXPORT_TAGS $err $errstr $sqlstate $drh $dbh $DBDPG_DEFAULT @EXPORT);
	@ISA = qw(DynaLoader Exporter);


	%EXPORT_TAGS =
		(
		 async => [qw(PG_ASYNC PG_OLDQUERY_CANCEL PG_OLDQUERY_WAIT)],
		 pg_types => [qw(
			PG_ACLITEM PG_ACLITEMARRAY PG_ANY PG_ANYARRAY PG_ANYELEMENT
			PG_ANYENUM PG_ANYNONARRAY PG_ANYRANGE PG_BIT PG_BITARRAY
			PG_BOOL PG_BOOLARRAY PG_BOX PG_BOXARRAY PG_BPCHAR
			PG_BPCHARARRAY PG_BYTEA PG_BYTEAARRAY PG_CHAR PG_CHARARRAY
			PG_CID PG_CIDARRAY PG_CIDR PG_CIDRARRAY PG_CIRCLE
			PG_CIRCLEARRAY PG_CSTRING PG_CSTRINGARRAY PG_DATE PG_DATEARRAY
			PG_DATERANGE PG_DATERANGEARRAY PG_EVENT_TRIGGER PG_FDW_HANDLER PG_FLOAT4
			PG_FLOAT4A